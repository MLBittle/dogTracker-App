import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DogTrackLibraryComponent } from './dog-track-library/dog-track-library.component';
import { TrackingDomesticDogsComponent } from './tracking-domestic-dogs/tracking-domestic-dogs.component';
import { TrackListComponent } from './dog-track-library/track-list/track-list.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { TrackComponent } from './shared/track/track.component';
import { TrackDetailsComponent } from './track-details/track-details.component';
import { TrackSearchComponent } from './tracking-domestic-dogs/track-search/track-search.component';
import { SearchResultsComponent } from './tracking-domestic-dogs/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    DogTrackLibraryComponent,
    TrackingDomesticDogsComponent,
    TrackListComponent,
    NavigationComponent,
    TrackComponent,
    TrackDetailsComponent,
    TrackSearchComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
