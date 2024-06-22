import { faker } from '@faker-js/faker'
faker.seed(42)
const mockedPosts = Array.from({ length: 5 }).map(() => ({
  title: faker.lorem.words(3),
  content: faker.lorem.paragraph(40),
  createdAt: faker.date.past().toLocaleDateString(),
  slug: faker.lorem.slug(),
  author: {
    // name: faker.person.fullName(),
    image: faker.image.avatar(),
    url: faker.internet.url(),
  },
}))

export async function getPosts() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  if (!mockedPosts) {
    return []
  }

  return mockedPosts
}

export async function getPostBySlug(slug: string) {
  const posts = await getPosts()

  return posts.find((post) => post.slug === slug) || null
}
