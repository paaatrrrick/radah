import Foundation


class DownloadOS {
    
    //This is litterally just a fetch call to the serverOSDownloadPath endpoint
    static func getDownloadLink(completion: @escaping (String?) -> Void) {
        guard let url = URL(string: serverOSDownloadPath) else { return completion(nil) }
        URLSession.shared.dataTask(with: url) { data, _, error in
            guard error == nil, let data = data,
                  let json = try? JSONSerialization.jsonObject(with: data) as? [String: Any],
                  let downloadURL = json["url"] as? String else { return completion(nil) }
            completion(downloadURL)
        }.resume()
    }
    
    static func downloadFile(from url: String) {
        // Example function to download a file from the given URL
        print("Downloading file from URL: \(url)")
        // Add your file download logic here
    }
    
    static func download() {
        getDownloadLink { downloadURL in
            guard let url = downloadURL else { return print("Failed to get download URL") }
            // Example action: Download the file
            downloadFile(from: url)
        }
    }


}

