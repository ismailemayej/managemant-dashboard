export type CloudAsset = {
    public_id: string;
    version: string;
    width: number;
    height: number;
    format: string;
    created_at: string;
    resource_type: string;
    tags: string[];
    bytes: number;
    type: string;
    etag: string;
    url: string;
    secure_url: string;
    signature: string;
    original_filename: string;
    error?: { message: string };
  };
  
  export interface CloudConfig {
    cloudName: string;
    uploadPreset: string;
  }
  
  class CloudApi {
    cloudName: string;
    uploadPreset: string;
  
    constructor(config: CloudConfig) {
      this.cloudName = config.cloudName;
      this.uploadPreset = config.uploadPreset;
    }
  
    uploadEndpoint = (): string => {
      return `https://api.cloudinary.com/v1_1/${this.cloudName}/auto/upload`;
    };
  
    uploadImage = async (
      file: File,
      success: (a: CloudAsset) => void,
      error: (e: { message: string }) => void
    ) => {
      const form = new FormData();
      form.append("file", file);
      form.append("upload_preset", this.uploadPreset);
   
  
      try {
        const res = await fetch(this.uploadEndpoint(), {
          method: "POST",
          body: form,
        });
        const data = await res.json();
        if (res.ok) {
          success(data);
        } else error(data);
      } catch {
        error({ message: "Error uploading img!" });
      }
    };
  }
  
  export default CloudApi;
  