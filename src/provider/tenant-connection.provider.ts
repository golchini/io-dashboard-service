import { InternalServerErrorException } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { getConnectionToken } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

export const tenantConnectionProvider = {
    provide: 'TENANT_CONNECTION',
    useFactory: (request, connection: Connection) => {
        if (!request.tenantId) {
            throw new InternalServerErrorException('Make sure to apply tenantsMiddleware');
        }
        return connection.useDb(request.tenantId)
    },
    inject: [REQUEST, getConnectionToken()],
}