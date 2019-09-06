export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d72a86b1f490ac42aa26b49',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-z6pcvn4m',
                  apiId: 'f77339bc-0181-4ed4-939e-d4c1af4652a6'
                },
                {
                  buildHookId: '5d72a86bdddb2be0cd7a74f9',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-7n42ejn2',
                  apiId: '6d661346-4810-4282-b213-cec51ae63171'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kenburcham/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-7n42ejn2.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
