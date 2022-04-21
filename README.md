# Oshi Health

Node Version:
Use nvm install 14.18.1

Installation:
Expo Image Picker(https://docs.expo.dev/versions/latest/sdk/imagepicker/#imagepickerlaunchcameraasyncoptions)
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
