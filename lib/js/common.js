/**
 * Function to search a value on an array
 * @param	needle: Value to search
 * @param	haystack: Array in which to search
 */
function inArray(needle, haystack){
	var exists=false;
	
	for(h in haystack){
		if(haystack[h]==needle){
			exists=true;
		}
	}
	
	return exists;
}
//----------------------------------

/**
 * Function to show a value in custom units
 * @param	value: Value
 * @param	units: Units to convert to
 */
function showValue(value, units){
	if(units=="lb"){	//We must convert from kg to lb
		value=value*2.20462234;
	}
	
	if(units=="in"){	//We must convert from cm to in
		value=value/2.54;
	}
	
	return number_format(value, 2, '.', '');
}
//----------------------------------

/**
 * Stores data on localStorage
 * @param	key: Key to be stored
 * @param	data: Data to be stored
 */
function setItem(key, data){
	if(typeof data=="object") {
        data=JSON.stringify(data);
    }
    localStorage.setItem(key, data);
}
//-------------------------------

/**
 * Gets data from localStorage
 * @param	key: Key to get data from
 * @return	data: Data to be stored
 */
function getItem(key){
	var value=localStorage.getItem(key);
    //Assume it is an object that has been stringified
    if(value!=null && value[0] == "{") {
        value=JSON.parse(value);
    }
	return value;
}
//-------------------------------

/**
 * Removes data from localStorage
 * @param	key: Key to remove from LocalStorage
 */
function removeItem(key){
	localStorage.removeItem(key);
}
//-------------------------------