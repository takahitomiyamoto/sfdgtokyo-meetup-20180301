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
    sfdx force:org:open -p lightning/n/SS_Custom_Surveys

### メタデータを変換する
    mkdir mdapi
    sfdx force:source:convert -r CustomSurveys -d mdapi
    sfdx force:source:convert -r NewComponentList -d mdapi
    sfdx force:source:convert -r Common -d mdapi

### package.xml へ以下を追記する
    <types>
      <name>AuraDefinitionBundle</name>
      <members>SS_NewComponentList</members>
      <members>SS_SurveyList</members>
    </types>
    <types>
      <name>ApexClass</name>
      <members>SS_NewComponentListController</members>
    </types>

### デプロイ先の Developer Edition 環境で Salesforce Surveys を手動で有効化しておく
    sfdx force:org:open -u yourOrgAlias

Setup > Feature Settings > Survey > Survey Settings > Enable Surveys

### Developer Edition 環境へデプロイする
    sfdx force:mdapi:deploy -d mdapi -u yourOrgAlias
    sfdx force:mdapi:deploy:report -w 10

### 権限セットを割り当てる
    sfdx force:user:permset:assign -n SS_New_Component_List -u yourOrgAlias
    sfdx force:user:permset:assign -n SS_Custom_Surveys -u yourOrgAlias
    sfdx force:org:open -u yourOrgAlias

## memo
### 設定を変更してもPulled Sourceが「No results found」となるコンフィグ
- Critical Updates
- Login Access Policies
    - Administrators Can Log in as Any User
- Lightning Components
    - Enable Debug Mode
- アプリケーションランチャーでのアプリの並び順
