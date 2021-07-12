const centralis = require('../centralis');

module.exports = {
  src_folders: centralis.src_folders,
  custom_commands_path: './commands',
  page_objects_path: centralis.page_objects_path,
  output_folder: '../test-results',
  globals_path: '../globals/globals-testrailOptimized.js',
  selenium: {
    start_process: false,
    start_session: true,
  },
  test_workers: {
    enabled: true,
    workers: centralis.test_workers,
  },
  test_settings: {
    default: {
      launch_url: centralis.launch_url,
      persist_globals: true,
      selenium_port: 4444,
      selenium_host: 'gbodock02-lin-cpt',
      desiredCapabilities: {
        browserName: 'chrome',
        webStorageEnabled: true,
        webdriver: {
          use_legacy_jsonwire: false,
        },
        chromeOptions: {
          w3c: false,
          args: ['--no-sandbox'],
        },
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
      screenshots: {
        enabled: false,
        on_failure: false,
        path: './test-results/screenshots',
      },
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        webdriver: {
          use_legacy_jsonwire: false,
        },
        chromeOptions: {
          args: ['--no-sandbox'],
          w3c: false,
        },
      },
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        acceptInsecureCerts: true,
      },
    },
  },
};
