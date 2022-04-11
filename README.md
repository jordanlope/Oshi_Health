# Oshi Health

Use nvm install 14.18.1 (https://stackoverflow.com/questions/69647332/cannot-read-properties-of-undefined-reading-transformfile-at-bundler-transfo)
rm -rf node_modules && npm install

If you get Node_Module not found error:
And you are sure the module exists, try these steps:
 1. Clear watchman watches: watchman watch-del-all
 2. Delete node_modules and run yarn install
 3. Reset Metro's cache: yarn start --reset-cache
 4. Remove the cache: rm -rf /tmp/metro-*

Some dependencies are incompatible with the installed expo package version:
 - react-native-safe-area-context - expected version: 3.3.2 - actual version installed: 4.2.4

Installation
expo install expo-image-picker

Example app.json with config plugin
{
  "expo": {
    "plugins": [
      [
        "expo-image-picker",
        {
          "photosPermission": "The app accesses your photos to let you share them with your friends."
        }
      ]
    ]
  }
}
