const fs = require('fs');
const path = require('path');
require('dotenv').config();

// 環境変数からAPIキーを取得
const apiKey = process.env.GOOGLE_MAPS_API_KEY;

if (!apiKey) {
    console.error('❌ GOOGLE_MAPS_API_KEY が設定されていません');
    console.log('📝 .env ファイルを作成して APIキーを設定してください');
    process.exit(1);
}

// HTMLファイルを読み込み
const htmlPath = path.join(__dirname, 'index.html');
let htmlContent = fs.readFileSync(htmlPath, 'utf8');

// プレースホルダーを実際のAPIキーに置換
htmlContent = htmlContent.replace(/YOUR_API_KEY/g, apiKey);

// ビルドディレクトリを作成
const buildDir = path.join(__dirname, 'dist');
if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir);
}

// ファイルをコピー・置換
const files = ['index.html', 'styles.css', 'script.js'];

files.forEach(file => {
    const sourcePath = path.join(__dirname, file);
    const destPath = path.join(buildDir, file);
    
    if (file === 'index.html') {
        // HTMLファイルはAPIキーを置換してコピー
        fs.writeFileSync(destPath, htmlContent);
        console.log(`✅ ${file} (APIキー置換済み)`);
    } else {
        // その他のファイルはそのままコピー
        fs.copyFileSync(sourcePath, destPath);
        console.log(`✅ ${file}`);
    }
});

console.log('\n🎉 ビルド完了！');
console.log(`📁 出力先: ${buildDir}`);
console.log('🚀 dist/index.html をブラウザで開いてください'); 