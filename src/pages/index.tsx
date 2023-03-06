import BlurImage from '@/components/BlurImage'
import { supabase } from '@/services/supabase.client'
import { TImage } from '@/types'
import Head from 'next/head'

interface Props {
  images: TImage[]
}
export async function getStaticProps() {
  const { data: images } = await supabase.from('images').select('*').order('id')

  return {
    props: {
      images
    }
  }
}

export default function Home({ images }: Props) {
  return (
    <>
      <Head>
        <title>Imagage Gallery</title>
        <meta name="description" content="Studies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {images.map(image => (
            <BlurImage key={image.id} image={image} />
          ))}
        </div>
      </main>
    </>
  )
}
