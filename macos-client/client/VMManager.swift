import Virtualization
import SwiftUI

class VMManager: ObservableObject {
    private var virtualMachine: VZVirtualMachine?
    private var windowController: VMWindowController?
    
    func launchVM() {
        guard let bundlePath = Bundle.main.resourcePath else {
            fatalError("Failed to retrieve bundle resource path")
        }

        let projectRoot = URL(fileURLWithPath: bundlePath)
            .deletingLastPathComponent()
            .deletingLastPathComponent()

        print("Project root path: \(projectRoot.path)")
        
        print("right here")
        print(vmBundlePath)
        
        print(vmBundleURL)
        
        print(auxiliaryStorageURL)
        
        //create the mac platform
        let macPlatform = VZMacPlatformConfiguration()
        let auxiliaryStorage = VZMacAuxiliaryStorage(contentsOf: auxiliaryStorageURL)
        macPlatform.auxiliaryStorage = auxiliaryStorage

        // Assuming the file exists at vmBundlePath and necessary data can be retrieved without error
        let hardwareModelData = try! Data(contentsOf: hardwareModelURL)
        let hardwareModel = VZMacHardwareModel(dataRepresentation: hardwareModelData)!
        macPlatform.hardwareModel = hardwareModel

        let machineIdentifierData = try! Data(contentsOf: machineIdentifierURL)
        let machineIdentifier = VZMacMachineIdentifier(dataRepresentation: machineIdentifierData)!
        macPlatform.machineIdentifier = machineIdentifier
        
        
        let virtualMachineConfiguration = VZVirtualMachineConfiguration()

        virtualMachineConfiguration.platform = macPlatform
        virtualMachineConfiguration.bootLoader = MacOSVirtualMachineConfigurationHelper.createBootLoader()
        virtualMachineConfiguration.cpuCount = MacOSVirtualMachineConfigurationHelper.computeCPUCount()
        virtualMachineConfiguration.memorySize = MacOSVirtualMachineConfigurationHelper.computeMemorySize()
        virtualMachineConfiguration.graphicsDevices = [MacOSVirtualMachineConfigurationHelper.createGraphicsDeviceConfiguration()]
        virtualMachineConfiguration.storageDevices = [MacOSVirtualMachineConfigurationHelper.createBlockDeviceConfiguration()]
        virtualMachineConfiguration.networkDevices = [MacOSVirtualMachineConfigurationHelper.createNetworkDeviceConfiguration()]
        virtualMachineConfiguration.pointingDevices = [MacOSVirtualMachineConfigurationHelper.createPointingDeviceConfiguration()]
        virtualMachineConfiguration.keyboards = [MacOSVirtualMachineConfigurationHelper.createKeyboardConfiguration()]

        try! virtualMachineConfiguration.validate()
        
        if #available(macOS 14.0, *) {
            try! virtualMachineConfiguration.validateSaveRestoreSupport()
        }

        // Create the virtual machine
        virtualMachine = VZVirtualMachine(configuration: virtualMachineConfiguration)

        // Start the VM
        virtualMachine?.start { result in
            switch result {
            case .success:
                print("Virtual Machine started successfully")
                // Show the VM output in a new window
                self.showVMWindow()
            case .failure(let error):
                print("Failed to start the Virtual Machine: \(error)")
            }
        }
    }

    // Create and display a window with VM's graphical output
    func showVMWindow() {
        DispatchQueue.main.async {
            self.windowController = VMWindowController(virtualMachine: self.virtualMachine!)
            self.windowController?.showWindow(nil)
        }
    }
}
