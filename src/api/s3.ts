import axios from 'axios';

import {PresignedUrlElement} from '@/types/s3';

export const s3Request = {
  uploadImage: async (image: FileList) => {
    try {
      // presigned url 발급
      const res = await axios.post('/api/s3/presigned', [image[0].name]);
      const presignedUrl = await res.data.data.elements[0].preSignedUrl;
      console.log('api/s3/presigned response', res);

      // s3에 이미지 업로드
      const uploadRes = await axios.put(presignedUrl, image[0], {
        headers: {
          'Content-Type': 'image/*',
        },
      });
      console.log('s3 upload response: ', uploadRes);

      return presignedUrl;
    } catch (error) {
      console.log(error);
    }
  },

  uploadImages: async (images: FileList[]) => {
    try {
      // 이미지 당 presigned url 발급
      const res = await axios.post(
        '/api/s3/presigned',
        images.map((image) => image[0].name),
      );
      const presignedUrls = await res.data.data.elements.map((element: PresignedUrlElement) => element.preSignedUrl);
      console.log('api/s3/presigned response', res);

      // s3에 이미지들 업로드
      const uploadRes = presignedUrls.map(
        async (url: string, index: number) =>
          await axios.put(url, images[index], {
            headers: {
              'Content-Type': 'image/*',
            },
          }),
      );
      console.log('s3 upload response: ', uploadRes);

      return presignedUrls;
    } catch (error) {
      console.log(error);
    }
  },
};
