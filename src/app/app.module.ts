import { A11yModule } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';
import { app_routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ValidacionComponent } from './pages/Validaciones/validacion.component';
import { EstablecimientoComponent } from './pages/establecimiento/establecimiento.component';
import { TabEstablecActividadesComponent } from './pages/establecimiento/tab-establec-actividades/tab-establec-actividades.component';
import { TabEstablecAlmacenesPlantasComponent } from './pages/establecimiento/tab-establec-almacenes-plantas/tab-establec-almacenes-plantas.component';
import { TabEstablecDatosGeneralesComponent } from './pages/establecimiento/tab-establec-datos-generales/tab-establec-datos-generales.component';
import { TabEstablecOtrosDatosComponent } from './pages/establecimiento/tab-establec-otros-datos/tab-establec-otros-datos.component';
import { MdEstablecDepartamentoComponent } from './pages/establecimiento/modals/md-establec-departamento/md-establec-departamento.component';
import { MdEstablecProvinciaComponent } from './pages/establecimiento/modals/md-establec-provincia/md-establec-provincia.component';
import { MdEstablecDistritoComponent } from './pages/establecimiento/modals/md-establec-distrito/md-establec-distrito.component';
import { MdEstablecGrupoProductoComponent } from './pages/establecimiento/modals/md-establec-grupo-producto/md-establec-grupo-producto.component';
import { MdEstablecActividadComponent } from './pages/establecimiento/modals/md-establec-actividad/md-establec-actividad.component';
import { MdEstablecProductoControladoComponent } from './pages/establecimiento/modals/md-establec-producto-controlado/md-establec-producto-controlado.component';
import { MdEstablecSubSectorComponent } from './pages/establecimiento/modals/md-establec-sub-sector/md-establec-sub-sector.component';
import { MdEstablecBusquedaEntidadComponent } from './pages/establecimiento/modals/md-establec-busqueda-entidad/md-establec-busqueda-entidad.component';
import { MdEstablecMostrarEntidadComponent } from './pages/establecimiento/modals/md-establec-mostrar-entidad/md-establec-mostrar-entidad.component';
import { MdEstablecSolicitudInscripcionComponent } from './pages/establecimiento/modals/md-establec-solicitud-inscripcion/md-establec-solicitud-inscripcion.component';
import { MdEstablecBusquedaDisaComponent } from './pages/establecimiento/modals/md-establec-busqueda-disa/md-establec-busqueda-disa.component';
import { MdEstablecRepresentanteLegalComponent } from './pages/establecimiento/modals/md-establec-representante-legal/md-establec-representante-legal.component';
import { MdEstablecBusquedaCargoComponent } from './pages/establecimiento/modals/md-establec-busqueda-cargo/md-establec-busqueda-cargo.component';
import { MdEstablecBusquedaRepresentanteLegalComponent } from './pages/establecimiento/modals/md-establec-busqueda-representante-legal/md-establec-busqueda-representante-legal.component';
import { TabSupDatosGeneralesComponent } from './pages/establecimiento/tab-establec-almacenes-plantas/tabs/superior/tab-sup-datos-generales/tab-sup-datos-generales.component';
import { TabSupDatosTempAlmComponent } from './pages/establecimiento/tab-establec-almacenes-plantas/tabs/superior/tab-sup-datos-temp-alm/tab-sup-datos-temp-alm.component';
import { TabSupDatosInicioCierreComponent } from './pages/establecimiento/tab-establec-almacenes-plantas/tabs/superior/tab-sup-datos-inicio-cierre/tab-sup-datos-inicio-cierre.component';
import { TabSupDatosPersonalComponent } from './pages/establecimiento/tab-establec-almacenes-plantas/tabs/superior/tab-sup-datos-personal/tab-sup-datos-personal.component';
import { TabSupDatosObservacionesComponent } from './pages/establecimiento/tab-establec-almacenes-plantas/tabs/superior/tab-sup-datos-observaciones/tab-sup-datos-observaciones.component';
import { TabInfDatosGeneralesComponent } from './pages/establecimiento/tab-establec-almacenes-plantas/tabs/inferior/tab-inf-datos-generales/tab-inf-datos-generales.component';
import { TabInfInicioCierreComponent } from './pages/establecimiento/tab-establec-almacenes-plantas/tabs/inferior/tab-inf-inicio-cierre/tab-inf-inicio-cierre.component';
import { TabInfFormaFarComponent } from './pages/establecimiento/tab-establec-almacenes-plantas/tabs/inferior/tab-inf-forma-far/tab-inf-forma-far.component';
import { TabInfCosmeticaComponent } from './pages/establecimiento/tab-establec-almacenes-plantas/tabs/inferior/tab-inf-cosmetica/tab-inf-cosmetica.component';
import { TabInfTpPrdSanComponent } from './pages/establecimiento/tab-establec-almacenes-plantas/tabs/inferior/tab-inf-tp-prd-san/tab-inf-tp-prd-san.component';
import { TabInfActividadComponent } from './pages/establecimiento/tab-establec-almacenes-plantas/tabs/inferior/tab-inf-actividad/tab-inf-actividad.component';
import { TabInfObservacionesComponent } from './pages/establecimiento/tab-establec-almacenes-plantas/tabs/inferior/tab-inf-observaciones/tab-inf-observaciones.component';
//import { FormGroup, FormBuilder } from '@angular/forms';


//import { HomeComponent } from './pages/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ValidacionComponent,
    EstablecimientoComponent,
    TabEstablecDatosGeneralesComponent,
    TabEstablecActividadesComponent,
    TabEstablecAlmacenesPlantasComponent,
    TabEstablecOtrosDatosComponent,
    MdEstablecDepartamentoComponent,
    MdEstablecProvinciaComponent,
    MdEstablecDistritoComponent,
    MdEstablecGrupoProductoComponent,
    MdEstablecActividadComponent,
    MdEstablecProductoControladoComponent,
    MdEstablecSubSectorComponent,
    MdEstablecBusquedaEntidadComponent,
    MdEstablecMostrarEntidadComponent,
    MdEstablecSolicitudInscripcionComponent,
    MdEstablecBusquedaDisaComponent,
    MdEstablecRepresentanteLegalComponent,
    MdEstablecBusquedaCargoComponent,
    MdEstablecBusquedaRepresentanteLegalComponent,
    TabSupDatosGeneralesComponent,
    TabSupDatosTempAlmComponent,
    TabSupDatosInicioCierreComponent,
    TabSupDatosPersonalComponent,
    TabSupDatosObservacionesComponent,
    TabInfDatosGeneralesComponent,
    TabInfInicioCierreComponent,
    TabInfFormaFarComponent,
    TabInfCosmeticaComponent,
    TabInfTpPrdSanComponent,
    TabInfActividadComponent,
    TabInfObservacionesComponent,
    //DatosgeneralesComponent,
    //ActividadesComponent,
    //AlmacenesplantasComponent,
    //DatosestablecimientosComponent,
    //OtrosComponent,



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    app_routing,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatIconModule,
    NgSelectModule,
    MatTabsModule,
    MatRadioModule,
    MatDatepickerModule
    //FormGroup,
    //FormBuilder
  ],

  exports: [
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    //MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
