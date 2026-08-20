const sharp = require('sharp');
const path = require('path');

async function cropIcon() {
  const inputPath = path.join(__dirname, 'public', 'images', 'logo_bulls_new.png');
  const outputPath = path.join(__dirname, 'src', 'app', 'icon.png');

  try {
    // We want to trim the transparent pixels from the image to make it fill the icon space
    await sharp(inputPath)
      .trim() // automatically removes transparent borders
      .resize(256, 256, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 } // transparent background
      })
      .toFile(outputPath);
      
    console.log("Icon successfully cropped and generated!");
  } catch (error) {
    console.error("Error cropping image:", error);
  }
}

cropIcon();
