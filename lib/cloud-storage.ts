/* 
 * CLOUD STORAGE INTEGRATION SETUP
 * Uncomment and configure the desired cloud storage service below
 */

// ==================== CLOUDINARY INTEGRATION ====================
/*
// Install: npm install cloudinary
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary (add to .env.local)
// CLOUDINARY_CLOUD_NAME=your_cloud_name
// CLOUDINARY_API_KEY=your_api_key  
// CLOUDINARY_API_SECRET=your_api_secret

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadToCloudinary(file: File): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      {
        resource_type: "auto",
        folder: "portfolio-builder",
        quality: "auto",
        fetch_format: "auto",
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result?.secure_url || '');
        }
      }
    ).end(buffer);
  });
}
*/

// ==================== AWS S3 INTEGRATION ====================
/*
// Install: npm install @aws-sdk/client-s3
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

// Configure AWS S3 (add to .env.local)
// AWS_REGION=your_region
// AWS_ACCESS_KEY_ID=your_access_key
// AWS_SECRET_ACCESS_KEY=your_secret_key
// AWS_S3_BUCKET=your_bucket_name

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function uploadToS3(file: File): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  
  const timestamp = Date.now();
  const fileExtension = file.name.split('.').pop();
  const fileName = `portfolio-builder/${timestamp}-${Math.random().toString(36).substring(2)}.${fileExtension}`;

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET,
    Key: fileName,
    Body: buffer,
    ContentType: file.type,
  });

  await s3Client.send(command);
  
  return `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
}
*/

// ==================== VERCEL BLOB INTEGRATION ====================
/*
// Install: npm install @vercel/blob
import { put } from '@vercel/blob';

// Configure Vercel Blob (add to .env.local)
// BLOB_READ_WRITE_TOKEN=your_vercel_blob_token

export async function uploadToVercelBlob(file: File): Promise<string> {
  const timestamp = Date.now();
  const fileExtension = file.name.split('.').pop();
  const fileName = `portfolio-builder/${timestamp}-${Math.random().toString(36).substring(2)}.${fileExtension}`;

  const blob = await put(fileName, file, {
    access: 'public',
  });

  return blob.url;
}
*/

// ==================== SUPABASE STORAGE INTEGRATION ====================
/*
// Install: npm install @supabase/supabase-js
import { createClient } from '@supabase/supabase-js';

// Configure Supabase (add to .env.local)
// SUPABASE_URL=your_supabase_url
// SUPABASE_ANON_KEY=your_supabase_anon_key

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function uploadToSupabase(file: File): Promise<string> {
  const timestamp = Date.now();
  const fileExtension = file.name.split('.').pop();
  const fileName = `portfolio-builder/${timestamp}-${Math.random().toString(36).substring(2)}.${fileExtension}`;

  const { data, error } = await supabase.storage
    .from('images') // Make sure this bucket exists
    .upload(fileName, file);

  if (error) {
    throw new Error(error.message);
  }

  const { data: { publicUrl } } = supabase.storage
    .from('images')
    .getPublicUrl(fileName);

  return publicUrl;
}
*/

// ==================== FIREBASE STORAGE INTEGRATION ====================
/*
// Install: npm install firebase
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Configure Firebase (add to .env.local)
// FIREBASE_API_KEY=your_api_key
// FIREBASE_AUTH_DOMAIN=your_auth_domain  
// FIREBASE_PROJECT_ID=your_project_id
// FIREBASE_STORAGE_BUCKET=your_storage_bucket

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export async function uploadToFirebase(file: File): Promise<string> {
  const timestamp = Date.now();
  const fileExtension = file.name.split('.').pop();
  const fileName = `portfolio-builder/${timestamp}-${Math.random().toString(36).substring(2)}.${fileExtension}`;

  const storageRef = ref(storage, fileName);
  const snapshot = await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(snapshot.ref);
  
  return downloadURL;
}
*/

// ==================== USAGE IN API ROUTE ====================
/*
// Update app/api/upload/route.ts to use cloud storage:

import { NextRequest, NextResponse } from 'next/server';
import { uploadToCloudinary } from '@/lib/cloud-storage'; // Choose your service

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file: File | null = data.get('file') as unknown as File;

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file uploaded' });
    }

    // Upload to cloud storage instead of local storage
    const publicUrl = await uploadToCloudinary(file); // or uploadToS3, uploadToVercelBlob, etc.

    return NextResponse.json({ 
      success: true, 
      url: publicUrl,
      fileName: file.name 
    });

  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to upload file' 
    });
  }
}
*/

export {};
