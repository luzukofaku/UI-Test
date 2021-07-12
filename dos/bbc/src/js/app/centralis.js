// const launch_url = 'https://portal.globalbackoffice.com/';
const launch_url = 'https://www.bbc.com/';
const db_server = '';

const test_workers = 4;

const src_folders = [
  './tests',
  './tests/bbc/login',
  './tests/bbc/football/todayFixtures',

];

const page_objects_path = [
  './page-objects',
  './page-objects/bbc/login',
  './page-objects/bbc/football',

];

module.exports = {
  src_folders,
  page_objects_path,
  launch_url,
  test_workers,
  db_server,
};
