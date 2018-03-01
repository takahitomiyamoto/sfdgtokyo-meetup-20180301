# meetup-20180301
### 環境を作成する
    git clone https://github.com/takahitomiyamoto/sfdgtokyo-meetup-20180301.git

    cd sfdgtokyo-meetup-20180301/

    ./orgInit.sh

### Salesforce Surveys を手動で有効化する
### 追加で権限セットを割り当てる
    sfdx force:user:permset:assign -n SS_Custom_Surveys


## memo
### 設定を変更してもPulled Sourceが「No results found」となるコンフィグ
- Critical Updates
- Login Access Policies
    - Administrators Can Log in as Any User
- Lightning Components
    - Enable Debug Mode