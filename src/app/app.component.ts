import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts = [
    {
      title: 'My First Post',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet varius posuere. Proin pretium commodo cursus. Praesent efficitur eros id ante auctor aliquet. Integer sed elit ut sem lobortis sollicitudin. Vestibulum tristique ex vitae urna dictum, nec vehicula lectus cursus. Morbi eget aliquam elit. Vestibulum vel tincidunt sem. Aliquam mattis fringilla nisi, vitae pulvinar ante semper ut. Praesent luctus lacus vel pulvinar consequat. Suspendisse varius mauris eget nisi blandit, ut dictum nunc tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel quam erat. Maecenas tempor iaculis tellus, in maximus leo posuere at. Nulla maximus a turpis vel ultricies. Integer volutpat sagittis faucibus.',
      loveIts: 5,
      created_at: new Date(),
    },
    {
      title: 'My Second Post',
      content:
        'Praesent tincidunt mauris at viverra ullamcorper. Integer id ligula sed velit congue pharetra. Praesent ornare eleifend hendrerit. In quis sem dui. Ut ultricies orci et ornare ornare. Aenean vitae augue vitae lorem placerat ornare suscipit a dolor. Nam dictum enim sem, at tristique dui feugiat vitae. Aliquam non pretium leo, vitae pulvinar mauris. Curabitur imperdiet elementum sem, et feugiat diam accumsan molestie. In in nunc imperdiet, gravida tellus a, pharetra massa.',
      loveIts: -10,
      created_at: new Date(),
    },
    {
      title: 'My Third Post',
      content:
        'Fusce non semper nulla, vel pharetra turpis. Sed eu lobortis turpis. Etiam et facilisis leo. Etiam a ex eget diam ullamcorper elementum at sed diam. Curabitur sed feugiat est, ac ultrices ante. Sed bibendum iaculis lorem in malesuada. In suscipit tincidunt erat, et pharetra eros lacinia id.',
      loveIts: 50,
      created_at: new Date(),
    },
  ];

  constructor() {}
}
