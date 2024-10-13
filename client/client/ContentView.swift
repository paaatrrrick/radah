//
//  ContentView.swift
//  client
//
//  Created by Patrick Foster on 10/12/24.
//

import SwiftUI

struct ContentView: View {
    @StateObject private var vmManager = VMManager()

    var body: some View {
        VStack {
            Button("Launch Virtual Machine") {
                vmManager.launchVM()
            }
            .padding()
        }
        .frame(width: 400, height: 300)
        .padding()
    }
}
