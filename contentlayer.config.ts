import {makeSource} from 'contentlayer/source-files'
import {BlogPost} from './src/contentlayer/schema/blog-post'
import {TextPage} from './src/contentlayer/schema/text-page'
import {Project} from './src/contentlayer/schema/project'
import {Profile} from './src/contentlayer/schema/profile'

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [BlogPost, TextPage, Project, Profile]
})
