# Lab1-Deployment

Dieses Repository enthält Azure Resource Manager(ARM) Vorlagen für einen Azure Storage Account und einer Azure Web App für Node.js.

## Schritte zur Bereitstellung

1. Stellen Sie die Ressourcen mithilfe von Azure PowerShell, Azure CLI oder Azure Portal in Ihrem Azure-Abonnement bereit.
2. Füllen Sie die erforderlichen Parameter in der Datei "Azuredeploy.parameters.json" aus.
3. Verwenden Sie eine der folgenden Methoden, um die Ressourcen bereitzustellen:

   - **Azure Portal**: Befolgen Sie [diese Schritte] (https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/deploy-portal), um die Vorlage über das Azure-Portal bereitzustellen.
   - **Azure PowerShell**: Führen Sie den folgenden Befehl in der PowerShell aus:

     ```Powershell
     New-AzResourceGroupDeployment -ResourceGroupName YourResourceGroupName -TemplateFile .\Lab1\azuredeploy.json -TemplateParameterFile .\Lab1\azuredeploy.parameters.json
     ```

   - **Azure CLI**: Führen Sie den folgenden Befehl in Azure CLI aus:

     ```shell
     az deployment group create --resource-group YourResourceGroupName --template-file ./Lab1/azuredeploy.json --parameters ./Lab1/azuredeploy.parameters.json
     ```

4. Überwachen Sie den Bereitstellungsprozess in Ihrem Azure Portal.

## Parameter

- `storageAccountName`: Name für das Azure Storage Konto.
- `webAppName`: Name für die Azure Web App.
- `location`: Azure-Region, in der die Ressourcen erstellt werden sollen.

## Zusätzliche Informationen

- [Azure Resource Manager Dokumentation](https://docs.microsoft.com/de-at/azure/azure-resource-manager/management/overview)
- [Azure CLI Dokumentation](https://docs.microsoft.com/de-at/cli/azure)
- [Azure PowerShell Dokumentation](https://docs.microsoft.com/de-at/powershell/azure/)