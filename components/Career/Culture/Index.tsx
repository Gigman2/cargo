/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import React from 'react'
import { Box, Text, Grid, GridItem, Button } from '@chakra-ui/react'
import Header from '@components/Atom/header'

const Culture: FC = () => {
  return (
    <Box px={{ base: 4, '2xl': 56 }} mt={24} mb={12}>
      <Header title="Our Culture" />
      <Grid templateColumns="repeat(12,1fr)" mt={12} pb={6}>
        <Box
          as={GridItem}
          colSpan={6}
          bg="white"
          justifyContent={'center'}
          alignItems="center"
        >
          <Text color="base.600" fontSize={28} fontWeight={700}>
            At GAYO, we are dedicated to developing the human interest to
            observe basic natural laws and adopt the behavior of living in
            harmony with nature
          </Text>

          <Text color="base.600" fontSize={24} mt={12} fontWeight={500}>
            Our goal is to create a balanced relationship between humans and the
            various natural systems on which they depend in such a way that all
            the components are accorded a proper degree of sustainability.
          </Text>

          <Button
            fontSize={20}
            bg="base.400"
            color="white"
            rounded={0}
            px={10}
            py={6}
            mt={8}
          >
            Read More
          </Button>
        </Box>
      </Grid>
    </Box>
  )
}

export default Culture
