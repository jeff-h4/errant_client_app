#!/bin/bash
echo "Building JSX files..."
pushd jsx
  jsx app.jsx > ../js/app.js
  jsx box.jsx > ../js/box.js
  jsx welcome_page.jsx > ../js/welcome_page.js
  jsx welcome_sign_in_form.jsx > ../js/welcome_sign_in_form.js
  jsx dashboard_page.jsx > ../js/dashboard_page.js
  jsx errand_tile.jsx > ../js/errand_tile.js
popd
echo "Building complete"
echo "Building Android App"
phonegap build android
echo "Building complete"
