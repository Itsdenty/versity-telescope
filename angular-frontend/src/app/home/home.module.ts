import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HomeComponent } from './home.component';
import { HomeService } from './home.service'
// import { BookEffects } from './effects/book';
import { HomeEffects } from './effects/home';
// import { BookExistsGuard } from './guards/book-exists';

// import { FindBookPageComponent } from './containers/find-book-page';
// import { ViewBookPageComponent } from './containers/view-book-page';
// import { SelectedBookPageComponent } from './containers/selected-book-page';
// import { CollectionPageComponent } from './containers/collection-page';
// import { MaterialModule } from '../material';

import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
        { path: '', component: HomeComponent },
      ]),
    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature('home', reducers),

    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    EffectsModule.forFeature([HomeEffects]),
  ],
  declarations: [
      HomeComponent
  ],
  providers: [ HomeService ],
})
export class HomeModule {}
