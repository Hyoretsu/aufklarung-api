import { container } from 'tsyringe';

import './providers';

import IssuesRepository from '@modules/issues/infra/typeorm/repositories/IssuesRepository';
import IIssuesRepository from '@modules/issues/repositories/IIssuesRepository';

container.registerSingleton<IIssuesRepository>('IssuesRepository', IssuesRepository);
