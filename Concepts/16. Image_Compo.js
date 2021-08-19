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

same example with 









