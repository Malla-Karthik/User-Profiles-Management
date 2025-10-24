git init
git add .
git commit -m "feat: initial react+tailwind user-profiles app"
# create a repo on GitHub manually, e.g. https://github.com/new -> name: user-profiles-react
# then add remote (replace <USER> and <REPO> with yours)
git remote add origin https://github.com/<USER>/user-profiles-react.git
git branch -M main
git push -u origin main
