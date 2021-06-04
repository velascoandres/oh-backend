import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {

    constructor(
        private mailerService: MailerService,
    ) { }

    async sendUserConfirmationLink({ displayName, email }: { displayName?: string, email?: string }, link: string) {

        await this.mailerService.sendMail({
            to: email,
            // from: '"Support Team" <support@example.com>', // override default from
            subject: 'Welcome to Open House! Confirm your Email',
            template: './confirmation', // `.hbs` extension is appended automatically
            context: { // ✏️ filling curly brackets with content
                name: displayName || email,
                link,
            },
        });
    }

    async sendResetAccountLink({ displayName, email }: { displayName?: string, email?: string }, link: string) {

        await this.mailerService.sendMail({
            to: email,
            // from: '"Support Team" <support@example.com>', // override default from
            subject: 'Reset your account',
            template: './resel-account', // `.hbs` extension is appended automatically
            context: { // ✏️ filling curly brackets with content
                name: displayName || email,
                link,
            },
        });
    }

}
