public with sharing class SS_NewComponentListController {

    @AuraEnabled
    public static List<Account> getAccountContacts() {
        List<Account> accountcontacts = [
            SELECT
                Id,
                Name,
                NumberOfEmployees,
                Phone,
                Owner.Name,
                (
                    SELECT
                        Contact.Name,
                        Phone,
                        Email
                    FROM Contacts
                )
            FROM Account
        ];

        return accountcontacts;
    }

    @AuraEnabled
    public static List<ContentVersion> getContents() {
        List<ContentVersion> contents = [
            SELECT
                Id
            FROM ContentVersion
            WHERE FileType = 'JPEG'
            ORDER BY LastModifiedDate DESC
        ];

        return contents;
    }

}