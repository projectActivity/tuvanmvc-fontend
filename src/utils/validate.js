/**
* Created by kuonvu on 
*/
export function validateLowerCase(str) {
	const reg = /^[a-z]+$/
	return reg.test(str)
}

export function validateUpperCase(str) {
	const reg = /^[A-Z]+$/
	return reg.test(str)
}

export function validateAlphabets(str) {
	const reg = /^[A-Za-z]+$/
	return reg.test(str)
}
