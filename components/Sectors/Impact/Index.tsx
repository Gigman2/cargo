/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from 'react'
import React from 'react'
import { Box, Text, Icon, Grid, GridItem, Image } from '@chakra-ui/react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

interface ISlide {
  title: string
  subtext: string
  cover: string
}

const Impact: FC<
  {
    data: ISlide[]
    [x: string]: any
  } & React.HTMLAttributes<HTMLDivElement>
> = ({ data, ...rest }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [left, setLeft] = useState(0)
  const WIDTH = 100 / data.length

  const prevSlide = () => {
    setActiveIndex(prev => prev - 1)
    setLeft(WIDTH * (activeIndex - 1))
  }

  const nextSlide = () => {
    setActiveIndex(prev => prev + 1)
    setLeft(WIDTH * -1 * (activeIndex + 1))
    return
  }

  return (
    <Box {...rest}>
      <Grid
        templateColumns={{ base: '100%', lg: 'repeat(11,1fr)' }}
        maxH={{ base: 'auto', lg: 124 }}
        overflow="hidden"
      >
        <Box
          as={GridItem}
          w="100%"
          h="100%"
          py={24}
          colSpan={5}
          bg="base.400"
          justifyContent={'center'}
          alignItems="center"
          overflow={'hidden'}
        >
          <Box
            w={`${100 * data.length}%`}
            boxSizing="border-box"
            overflow="hidden"
            mr={24}
          >
            {data.map(item => (
              <Box
                key={item.title}
                w={`${100 / data.length}%`}
                px={{ base: 16, xl: 24 }}
                float="left"
                position={'relative'}
                transition={'all .2s ease-in-out'}
                left={`${left}%`}
              >
                <Text color={'white'} fontSize={48} fontWeight="bold">
                  {item.title}
                </Text>
                <Text
                  my={4}
                  color={'white'}
                  fontSize={24}
                  lineHeight={1.4}
                  fontWeight={450}
                >
                  {item.subtext}
                </Text>
              </Box>
            ))}
          </Box>

          {data.length > 1 && (
            <Box
              d="flex"
              w={'100px'}
              justifyContent="space-between"
              mt={8}
              ml={{ base: 16, xl: 24 }}
            >
              <Box
                w={10}
                h={10}
                d="flex"
                bg={activeIndex === 0 ? 'base.600' : '#125837'}
                rounded="full"
                alignItems="center"
                justifyContent={'center'}
                cursor={activeIndex === 0 ? 'not-allowed' : 'pointer'}
                onClick={() => (activeIndex === 0 ? null : prevSlide())}
              >
                <Icon as={IoIosArrowBack} boxSize={5} color="white" />
              </Box>
              <Box
                w={10}
                h={10}
                d="flex"
                rounded="full"
                bg={activeIndex >= data.length - 1 ? 'base.600' : '#125837'}
                cursor={
                  activeIndex >= data.length - 1 ? 'not-allowed' : 'pointer'
                }
                alignItems="center"
                justifyContent={'center'}
                onClick={() =>
                  activeIndex >= data.length - 1 ? null : nextSlide()
                }
              >
                <Icon as={IoIosArrowForward} boxSize={5} color="white" />
              </Box>
            </Box>
          )}
        </Box>
        <Box as={GridItem} colSpan={6}>
          <Box w="100%" h="100%" bg="gray.200" overflow={'hidden'}>
            <Box
              w={`${100 * data.length}%`}
              d="flex"
              boxSizing="border-box"
              mr={24}
              h="100%"
            >
              {data.map(item => (
                <Box
                  w={`${100 / data.length}%`}
                  key={item.cover}
                  float={'left'}
                  position={'relative'}
                  transition={'all .2s ease-in-out'}
                  left={`${left}%`}
                >
                  <Image src={item.cover} h="100%" w="auto" />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}

export default Impact
