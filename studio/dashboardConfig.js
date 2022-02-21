export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '6213971ae3ab0f0e135aa4e6',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-axgihs3j',
                  apiId: '30ef12fc-5f3f-4c6f-9b1c-9854ad0838d4'
                },
                {
                  buildHookId: '6213971a98b17b0abd29ac6e',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-e68q6pmv',
                  apiId: 'cf844ec3-cff2-464f-bdfb-f05d24c17f15'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wotis2/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-e68q6pmv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
