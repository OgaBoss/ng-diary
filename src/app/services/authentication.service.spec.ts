import { TestBed, inject, async } from '@angular/core/testing';
import { XHRBackend, Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, HttpModule } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { ApiFactory } from '../helpers/index';
import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service, mockbackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        AuthenticationService,
        ApiFactory,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  beforeEach(inject([AuthenticationService, XHRBackend], (_servive: AuthenticationService, _mockbackend: MockBackend) => {
    service = _servive;
    mockbackend = _mockbackend;
  }));

  it('should hit login endpoint and return user credential', () => {
    const data  = {
      'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZGlhcnlhcGkuZGV2L2F1dGgvbG9naW4iLCJpYXQiOjE1MDM2NTAwMTMsImV4cCI6MTUwMzY1MzYxMywibmJmIjoxNTAzNjUwMDEzLCJqdGkiOiJZU0M4RGwxU0RJb1NQNVlFIiwic3ViIjoxfQ.gQ7FyRbwmQlIKNxydGwPVb7z8woBQTqwuomOVEgFY7c',
      'user': {
        'id': 1,
        'name': 'Sydney Hoppe',
        'email': 'dami@ngdiary.com',
        'created_at': '2017-08-07 12:13:40',
        'updated_at': '2017-08-07 12:13:40'
      }
    };

    mockbackend.connections.subscribe((connection: MockConnection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(data)
      })));
    });
    service.login( 'admin@admin.com',  'secret')
      .subscribe((response) => {
        console.log( 'response :: ' +  response.token );
        expect(response).toEqual(data);
        expect(response.token).toEqual(data.token);
        expect(response.user).toEqual(data.user);
      });
  });
});
