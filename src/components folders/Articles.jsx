import React from 'react'
import { Card, Image, Text } from "@chakra-ui/react"
import {  For, Stack } from "@chakra-ui/react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
// import { title } from 'process'
import durgaImage from "../images/75427.jpg";


function Articles() {
  const ArticlesInfo=[
    {name:"Durga",discription:"talented person across world",img:durgaImage},
    {name:"Durga",discription:"talented person across world",img:durgaImage},
    {name:"Durga",discription:"talented person across world",img:durgaImage},
    {name:"Durga",discription:"talented person across world",img:durgaImage}
  ]
  const ArticlesList = ({ name ,discription ,img}) => {
    return (
<Stack gap="4" direction="row" wrap="wrap">
      
          <Card.Root className='max-w-sm' >
            <Card.Body gap="2">
            <Image
          src={img}
          alt="Green double couch with wooden legs"
        />
              <Card.Title mb="2">{name}</Card.Title>
              <Card.Description>
              {discription}
              </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
            <Avatar
                src="https://picsum.photos/200/300"
                name="Nue Camp"
                size="lg"
                shape="rounded"
              />
            </Card.Footer>
          </Card.Root>
     
    </Stack>
    );
};
  return (
    <section className='flex items-center  bg-green-500 gap-x-6 pt-6 '>
      <div className='flex bg-yellow-500  md:flex md:flex-col overflow-hidden'>
      <div className='flex gap-x-5'>
      {ArticlesInfo.map((item)=>(
  <ArticlesList key={item.name} name={item.name} img={item.img} discription={item.discription}/>
))}
</div>
</div>
    </section>
  )
}

export default Articles