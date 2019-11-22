import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiscosDetailPage } from './discos-detail.page';

describe('DiscosDetailPage', () => {
  let component: DiscosDetailPage;
  let fixture: ComponentFixture<DiscosDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscosDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiscosDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
