import {Component} from '@angular/core';

@Component({
  selector: 'app-post4',
  template: `
    <div class="post-4">
      <h2>post title</h2>
      <p>dsadaskjdasnlkfalgnaklsgnsaklgangklagnklanglaskgnkalngalkngkla</p>
    </div>
  `,
  styles: [`
    .post-4{
      padding: .5rem;
      border: 2px solid black;
    }
    h2{
      font-size: 1rem;
    }
  `]
})
export class Post4Component{}
