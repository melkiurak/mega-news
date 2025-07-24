import  { expect, test,} from 'vitest'
import { PostSlider } from '@components/PostSlider/PostSlider'
import { setUser } from '@reducer/users-reducer';

const postTest = test.extend({
  user: async (_, use) => {
    await use(setUser) 
  }
})

test("Render Post", ({user}) => {
  expect(user).toBe('Alice')
});