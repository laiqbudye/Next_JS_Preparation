It is very common to add images to web application.

lets first see an example with normal html img element


create a page which will show pets images.


function PetsPage() {
  return (
    <div>
      {
        ['1','2','3','4','5'].map( path => {        // consider '1','2','3' as image names
            return (
              <div key={path}>
                <img src={`/${path}.jpg`} alt='pet' width='280' height='420'/>
              </div>
            )
        })
      }
    </div>
  )
}

export default PetsPage

Problems with above approach,
  - it will download the image with original size which will be heavy operation
  - we have specified height width of an image but still it will download original resolution file
  - it will send requst for all images at initial load time



------------------------------------------------------------------------------------------------------------------------------

same example with nextJS Image tag -

import Image from 'next/Image';

function PetsPage() {
  return (
    <div>
      {
        ['1','2','3','4','5'].map( path => {        // consider '1','2','3' as image names
            return (
              <div key={path}>
                <Image src={`/${path}.jpg`} alt='pet' width='280' height='420'/>
              </div>
            )
        })
      }
    </div>
  )
}

export default PetsPage


Benefits with above approach,
  - it will reduce the image size & then dwnload. for 2MB file it will reduce than to 30kb & then dwnload
  - it supports lazy loading. (does not fetch all images at initial load, only fetches images which are visible to user on initial load & then based on scrolling it will make new requests)
  - even if we specify jpg image, it converts jpg to webp which is more optimized & faster
  - with placeholder= {blur} prop (this prop works with only dynamic images), it will render blur version of the image till the time actual image gets downloaded








