// Type Alias do uid usando union (|)
type Uid = number | string | undefined
type Platform = 'Windows' | 'Linux' | 'Mac OS'

function logDetails (uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}.`);
}

function logInfo (uid: Uid, user: string) {
  console.log(`An user with ${uid} has a name as ${user}.`);
}

function renderPlatform(platform: Platform) {
  return console.log(platform)
}

logDetails(123, 'sapato')
logDetails('123', 'sapato')

logInfo(123, 'Gui')
logInfo('123', 'Gui')

renderPlatform('Linux')