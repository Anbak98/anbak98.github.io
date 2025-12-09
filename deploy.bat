@echo off
echo ===================================
echo 🔧 Angular 앱 빌드 중...
echo ===================================

ng build --output-path --base-href /anbak98.github.io/

IF %ERRORLEVEL% NEQ 0 (
    echo ❌ 빌드 실패! 스크립트를 종료합니다.
    pause
    exit /b %ERRORLEVEL%
)

echo ===================================
echo 🚀 GitHub Pages에 배포 중...
echo ===================================

npx angular-cli-ghpages --dir=dist/anbak98_portfolio/browser --branch=gh-pages

IF %ERRORLEVEL% NEQ 0 (
    echo ❌ 배포 실패! GitHub 설정을 확인하세요.
    pause
    exit /b %ERRORLEVEL%
)

echo ===================================
echo ✅ 배포 완료! 아래 주소에서 확인하세요:
echo 🔗 https://anbak98.github.io/
echo ===================================

pause