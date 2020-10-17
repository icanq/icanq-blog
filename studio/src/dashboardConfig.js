export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8a6bfbda7488ecaf81632f',
                  title: 'Sanity Studio',
                  name: 'icanq-blog-studio',
                  apiId: 'cb3f1367-f08c-4294-8a34-1f6038abdd86'
                },
                {
                  buildHookId: '5f8a6bfb0e2c91f9e4d410f5',
                  title: 'Blog Website',
                  name: 'icanq-blog',
                  apiId: '6d8ab9b2-a1cd-469d-97b8-8f63281ce540'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/icanq/icanq-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://icanq-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
