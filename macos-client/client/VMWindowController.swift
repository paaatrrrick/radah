import Cocoa
import Virtualization

class VMWindowController: NSWindowController {

    private var vmView: VZVirtualMachineView!
    private var virtualMachine: VZVirtualMachine
    
    init(virtualMachine: VZVirtualMachine) {
        self.virtualMachine = virtualMachine
        
        // Create a window programmatically
        let window = NSWindow(
            contentRect: NSMakeRect(0, 0, 1024, 768),
            styleMask: [.titled, .closable, .resizable],
            backing: .buffered,
            defer: false
        )
        window.title = "Virtual Machine"
        
        // Initialize the VM view
        vmView = VZVirtualMachineView(frame: NSMakeRect(0, 0, 1024, 768))
        vmView.virtualMachine = virtualMachine
        
        // Set the view as the window's content view
        window.contentView = vmView
        
        super.init(window: window)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}
