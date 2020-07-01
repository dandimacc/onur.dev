import NextLink from 'next/link'
import { Heading, Stack, Text } from '@chakra-ui/core'
import tinytime from 'tinytime'

const BlogPost = (frontMatter) => {
  const {
    publishedAt,
    readingTime: { text: readingDuration },
    // summary,
    title
  } = frontMatter

  const pathFiles = frontMatter.__resourcePath.split('/')
  const slug = pathFiles[pathFiles.length - 2]

  return (
    <NextLink href={`/${slug}`} passHref>
      <a>
        <Stack spacing={2}>
          <Heading as="h3" fontSize="lg" fontWeight="medium">
            {title}
          </Heading>
          {/* <Text color={systemTheme === 'light' ? 'gray.600' : 'gray.500'} mb={2}>
            {summary}
          </Text> */}
          <Text fontSize="sm" color="gray.400">
            <time dateTime={publishedAt}>{tinytime('{MM} {DD}, {YYYY}').render(new Date(publishedAt))}</time>
            {' • '}
            {readingDuration}
          </Text>
        </Stack>
      </a>
    </NextLink>
  )
}

export default BlogPost
