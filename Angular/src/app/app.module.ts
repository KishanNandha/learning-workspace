import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZippyComponent } from './animation/zippy/zippy.component';
import { TodosComponent } from './animation/todos/todos.component';
import { LoginServiceService } from './dependency-injection/login-service.service';
import { LogServiceService } from './dependency-injection/log-service.service';
import { GithubFollowersService } from './services/github-followers.service';
import { PostService } from './webservice/post.service';
import { SummaryPipe } from './pipes/summary.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule} from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BindingsComponent } from './bindings/bindings.component';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { ReUsableComponentComponent } from './re-usable-component/re-usable-component.component';
import { CustomComponentComponent } from './custom-component/custom-component.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { WebserviceComponent } from './webservice/webservice.component';
import { MyErrorHandler } from './webservice/myErrorHandler';
import { ErrorHandler } from "@angular/core";
import { RoutingComponent } from './routing/routing.component';
import { NavbarComponent } from './routing/navbar/navbar.component';
import { GithubFollowersComponent } from './routing/github-followers/github-followers.component';
import { GithubProfileComponent } from './routing/github-profile/github-profile.component';
import { NotFoundComponent } from './routing/not-found/not-found.component';
import { HomeComponent } from './routing/home/home.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { AnimationComponent } from './animation/animation.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingsComponent,
    PipesComponent,
    SummaryPipe,
    DirectivesComponent,
    ReUsableComponentComponent,
    CustomComponentComponent,
    TemplateFormsComponent,
    ReactiveFormComponent,
    WebserviceComponent,
    RoutingComponent,
    NavbarComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    NotFoundComponent,
    HomeComponent,
    DependencyInjectionComponent,
    TodosComponent,
    ZippyComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
     RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'followers', component: GithubFollowersComponent},
      { path: 'followers/:id/:username', component: GithubProfileComponent},
      { path: 'posts', component:  WebserviceComponent},
      { path: '**', component:  NotFoundComponent}
    ])
  ],
  providers: [
    PostService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: MyErrorHandler },
    LoginServiceService,
    LogServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
