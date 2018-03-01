# meetup-20180301
### 環境を作成する
    git clone https://github.com/takahitomiyamoto/sfdgtokyo-meetup-20180301.git
    cd sfdgtokyo-meetup-20180301/
    ./orgInit.sh

### エラー内容を確認する
    In field: object - no CustomObject named Survey found

### Salesforce Surveys を手動で有効化する
Setup > Feature Settings > Survey > Survey Settings > Enable Surveys

### 権限セット SS_Custom_Surveys の中身を少し変更する
/sfdgtokyo-meetup-20180301/meetup/Common/main/default/permissionsets/SS_Custom_Surveys.permissionset-meta.xml

    <label>Custom Surveys</label>

### 追加で権限セットを割り当てる
    cd meetup
    sfdx force:source:push
    sfdx force:user:permset:assign -n SS_Custom_Surveys


## memo
### 設定を変更してもPulled Sourceが「No results found」となるコンフィグ
- Critical Updates
- Login Access Policies
    - Administrators Can Log in as Any User
- Lightning Components
    - Enable Debug Mode