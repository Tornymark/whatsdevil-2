/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

function successfullMessage(msg) {
    return "๐ฆนโโ๏ธ *AZURE*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "โ๏ธ *AZURE*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "โ *AZURE*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
