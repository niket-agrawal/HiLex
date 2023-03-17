<?php
	// Turn off error reporting temporarily
	error_reporting(0);

	$part_id = $_GET['partID'];
	$expID = $_GET['expID'];
	$expAbbr = $_GET['expAbbr'];
	$compCode = $_GET['compCode'];

	header('Content-Type: text/csv');	
	header('Content-Disposition: attachment; filename='.$expAbbr.'-'.$part_id.'.csv');

	//output data as CSV
	$fp = fopen('php://output', 'w');
	fprintf($fp, chr(0xEF).chr(0xBB).chr(0xBF));

	$filename_LBQ = 'data_experimenters/data/'.$expID.'_profile.json';
	$filename_HLX = 'data_experimenters/data/'.$expID.'_HiLex.json';
	$filename_analysed = 'data_experimenters/data/'.$expID.'_HiLexEmail.json';
	// load data from JSON file
	$data_lbq = json_decode(file_get_contents($filename_LBQ), true);
	$data_hlx = json_decode(file_get_contents($filename_HLX), true);
	$data_analysed = json_decode(file_get_contents($filename_analysed), true);
	
	// search for data matching the partID
	$match_hlx = array_filter($data_hlx, function($d) use ($part_id, $expAbbr) {
		return $d['partID'] == $expAbbr.$part_id;
	});
	$match_lbq = array_filter($data_lbq, function($d) use ($part_id, $expAbbr) {
		return $d['Q01_PartID'] == $expAbbr.$part_id;
	});
	$match_analysed = array_filter($data_analysed, function($d) use ($part_id, $expAbbr) {
		return $d['pID'] == $expAbbr.$part_id;
	});

	
	///////////////////////////////////////////////////////////////////////////////////////////
	if(count($match_lbq) > 1) {
		//echo nl2br ("\n[LOG] Error in LBQ (match_lbq > 1) - please email us with this error and your experiment details\n"); //echo "ISSUE"; choosing first element
		fputcsv($fp, "[LOG] Error in LBQ (match_lbq > 1) - please email us with this error and your experiment details"); //echo "ISSUE"; choosing first element
	}
	elseif (count($match_lbq) == 1) {
	 	$firstKey = array_keys($match_lbq)[0];
	 	$match_lbq = $match_lbq[$firstKey];
	}
	else {
		//echo nl2br ("\n[LOG] Error in LBQ (match_lbq might be empty - please email us with this error and your experiment details\n");
		fputcsv($fp, ["[LOG] Error in LBQ (match_lbq might be empty - please email us with this error and your experiment details"]);
	}
	//echo json_encode ($match_lbq);

	///////////////////////////////////////////////////////////////////////////////////////////
	if(count($match_analysed) > 1) {
		$match_analysed = array_filter($match_analysed, function($d) use ($compCode) { return $d['pIDFailsafe'] == "#".$compCode; });
		if(!empty($compCode) and !empty($match_analysed)) {
			$firstKey = array_keys($match_analysed)[0];
			$match_analysed = $match_analysed[$firstKey];
		}
		else {
			//echo nl2br ("\n[LOG] Error in completion code + ANALYSED (does not exist, match_analysed > 1) - please email us with this error and your experiment details\n");
			fputcsv($fp, ["[LOG] Error in completion code + ANALYSED (does not exist, match_analysed > 1) - please email us with this error and your experiment details"]);
			$match_analysed = "";
		}
	}
	elseif (count($match_analysed) == 1) {
	 	$firstKey = array_keys($match_analysed)[0];
		$match_analysed = $match_analysed[$firstKey];
	}
	else {
		//echo nl2br ("\n[LOG] Error in ANALYSED (match_analysed might be empty - please email us with this error and your experiment details\n");
		fputcsv($fp, ["[LOG] Error in ANALYSED (match_analysed might be empty - please email us with this error and your experiment details"]);
	}
	//echo json_encode ($match_analysed);

	///////////////////////////////////////////////////////////////////////////////////////////
	if(count($match_hlx) > 1) {
		$match_hlx = array_filter($match_hlx, function($d) use ($compCode) { return $d['completionCode'] == $compCode; });
		if(!empty($compCode) and !empty($match_hlx)) {
			$firstKey = array_keys($match_hlx)[0];
			$match_hlx = $match_hlx[$firstKey]['rawData'];
		}
		else {
			//echo nl2br ("\n[LOG] Error in completion code + HLX (does not exist, match_hlx > 1) - please email us with this error and your experiment details\n");
			fputcsv($fp, ["[LOG] Error in completion code + HLX (does not exist, match_hlx > 1) - please email us with this error and your experiment details"]);
		}
		//echo json_encode ($match_hlx);
		//echo "<br><br><br>";
	}
	elseif (count($match_hlx) == 1) {
	 	$firstKey = array_keys($match_hlx)[0];
		$match_hlx = $match_hlx[$firstKey]['rawData'];
	}
	else {
		//echo nl2br ("\n[LOG] Error in HLX (match_hlx might be empty - please email us with this error and your experiment details\n");
		fputcsv($fp, ["[LOG] Error in HLX (match_hlx might be empty - please email us with this error and your experiment details"]);
	}
	//print json_encode ($match_hlx);
	
	

	// Write header row
	$header_lbq = array("timestamp","Q01_PartID","Q02_age","Q03_gender","Q04_place","Q05_education","Q06_nativeLang","Q07_otherLang","Q08_rateHi","Q09_rateSpeak","Q10_rateUnd","Q11_rateRead","Q12_rateWrite","Q13_ageAcq","Q14_experienceHi","Q15_formalEduHi","Q16_hiInstruction","Q17_hrsPerDay","Q18_yrsLivedHi","Q19_consent");
	$header_device = array("_resTotal","_resAvail","_colDepth","_orient","_deviceLang","_isTouch","_isTablet");
	$header_analysed = array("timestamp","completionCode","HilexScore","GhentScore","rawAcc","hitRate","falseAlarm","Wcorr","NWcorr","RTavg","RTavgWords","RTavgNWords");
	$header_hlx = array('stimItem', 'itemType', 'dummyItem', 'corrResp', 'givenResp', 'acc', 'rt');

	// provided, match_lbq, hlx, analysed is correct (only 1 csv each)
	if(count($match_lbq) == 29) {
		$keyslbq = array_slice(array_keys($match_lbq),0,20);
		$keysdevice = array_slice(array_keys($match_lbq),21,7);

		$valueslbq = array_values(array_intersect_key($match_lbq, array_flip($keyslbq)));
		$valuesdevice = array_values(array_intersect_key($match_lbq, array_flip($keysdevice)));
		//echo json_encode ($valueslbq);
		//echo json_encode ($valuesdevice);
		//echo json_encode ($keyslbq);
		//echo json_encode ($keysdevice);
		fputcsv($fp, $header_lbq);
		fputcsv($fp, $valueslbq);
		fputcsv($fp, $header_device);
		fputcsv($fp, $valuesdevice);		
	} else {
		//echo "Error";
		fputcsv($fp, $header_lbq);
		fputcsv($fp, ["Error"]);
		fputcsv($fp, $header_device);
		fputcsv($fp, ["Error"]);
	}

	if(count($match_analysed) == 20) {
		//$keysanalysed = array_slice(array_keys($match_analysed),10,10);
		//$valuesanalysed = array_values($valuesanalysed);
		$keysanalysed = array_merge(array_slice(array_keys($match_analysed), 0, 1), array_slice(array_keys($match_analysed), 6, 1), array_slice(array_keys($match_analysed), 10, 10));
		$valuesanalysed = array();
		foreach ($keysanalysed as $key) {
			if (isset($match_analysed[$key])) {
				$valuesanalysed[] = $match_analysed[$key];
			}
		}
		//echo json_encode ($valuesanalysed); //timestamp pIDFailsafe
		fputcsv($fp, $header_analysed);
		fputcsv($fp, $valuesanalysed);
	} else {
		//echo "Error";
		fputcsv($fp, $header_analysed);
		fputcsv($fp, ["Error"]);
	}

	if(count($match_hlx) == 95) {
		fputcsv($fp, $header_hlx); // replace with your own column names
		foreach ($match_hlx as $d) {
			//echo "<br>";
			fputcsv($fp, [$d['stimItem'], $d['itemType'], $d['dummyItem'], $d['corrResp'], $d['givenResp'], $d['acc'], $d['rt']]); // replace with your own column names
		}
	} else {
		//echo "Error";
		fputcsv($fp, $header_hlx); // replace with your own column names
		fputcsv($fp, ["Error"]);
	}

	fclose($fp);

	// Turn error reporting back on
	error_reporting(E_ALL);

?>