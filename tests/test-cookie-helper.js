/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

/* For reference read the Jasmine and Sinon docs
 * Jasmine docs: https://jasmine.github.io/
 * Sinon docs: http://sinonjs.org/docs/
 */

describe('mozilla-cookie-helper.js', function () {
    function clearCookies() {
        document.cookie = '';
    }

    beforeEach(clearCookies);
    afterEach(clearCookies);

    describe('setItem method', function () {
        const cookieId = 'test-cookie';
        var date = new Date();
        date.setHours(date.getHours() + 48);

        beforeEach(clearCookies);
        afterEach(clearCookies);

        it('should set a cookie onto document.cookie', function () {
            window.CookieHelper.setItem(cookieId, 'test', date, '/');
            expect(document.cookie).toContain(cookieId);
        });

        it('will return false if you dont pass the sKey property', function () {
            expect(window.CookieHelper.setItem()).toBeFalse();
        });

        it('will return false if sKey equals any of the folllowing: expires|max-age|path|domain|secure|samesite', function () {
            expect(window.CookieHelper.setItem('expires')).toBeFalse();
            expect(window.CookieHelper.setItem('max-age')).toBeFalse();
            expect(window.CookieHelper.setItem('path')).toBeFalse();
            expect(window.CookieHelper.setItem('domain')).toBeFalse();
            expect(window.CookieHelper.setItem('secure')).toBeFalse();
            expect(window.CookieHelper.setItem('samesite')).toBeFalse();
        });
    });

    describe('checkSameSite method', function () {
        const cookieId = 'test-cookie';
        var date = new Date();
        date.setHours(date.getHours() + 48);

        beforeEach(clearCookies);
        afterEach(clearCookies);

        it('should be called when calling Mozilla.Cookies.setItem', function () {
            const spy = spyOn(window.CookieHelper, 'checkSameSite');
            window.CookieHelper.setItem(cookieId);
            expect(spy).toHaveBeenCalled();
        });

        it('should return null if no argument is passed', function () {
            expect(window.CookieHelper.checkSameSite()).toBeNull();
        });

        it('should return "lax" if a truthy string is passed (but not strict | none)', function () {
            expect(window.CookieHelper.checkSameSite('flour')).toBe('lax');
            expect(window.CookieHelper.checkSameSite('lax')).toBe('lax');
        });
        it('should return "none" if "none" is passed to function', function () {
            expect(window.CookieHelper.checkSameSite('none')).toBe('none');
        });

        it('should return "lax" if "lax" is passed to function', function () {
            expect(window.CookieHelper.checkSameSite('none')).toBe('none');
        });
    });

    describe('getItem method', function () {
        const cookieId = 'test-cookie';
        var date = new Date();
        date.setHours(date.getHours() + 48);

        beforeEach(function () {
            clearCookies();
            window.CookieHelper.setItem(cookieId, 'test', date, '/');
        });

        afterEach(clearCookies);

        it('should return the value of the cookie that is passed to the getItem method', function () {
            expect(window.CookieHelper.getItem(cookieId)).toBe('test');
        });

        it('should return null if no cookie with that name is found', function () {
            expect(window.CookieHelper.getItem('oatmeal-raisin')).toBeNull();
        });
        it('should return null if no argument for sKey is passed', function () {
            expect(window.CookieHelper.getItem()).toBeNull();
        });
    });

    describe('hasItem method', function () {
        const cookieId = 'test-cookie';
        var date = new Date();
        date.setHours(date.getHours() + 48);

        beforeEach(function () {
            clearCookies();
            window.CookieHelper.setItem(cookieId, 'test', date, '/');
        });

        afterEach(clearCookies);

        it('should return false if no argument for sKey is passed', function () {
            expect(window.CookieHelper.hasItem()).toBeFalse();
        });
        it('should return false if no matching cookie is found', function () {
            expect(window.CookieHelper.hasItem('chocolate-chip')).toBeFalse();
        });
        it('should return true if matching cookie is found', function () {
            expect(window.CookieHelper.hasItem(cookieId)).toBeTrue();
        });
    });

    describe('removeItem method', function () {
        const cookieId = 'test-cookie';
        var date = new Date();
        date.setHours(date.getHours() + 48);

        beforeEach(function () {
            clearCookies();
            window.CookieHelper.setItem(cookieId, 'test', date, '/');
        });

        afterEach(clearCookies);

        it('should return false if the cookie doesnt exist', function () {
            expect(window.CookieHelper.removeItem('snickerdoodle')).toBeFalse();
        });

        it('should return true if the cookie is found in document.cookie', function () {
            expect(window.CookieHelper.removeItem(cookieId)).toBeTrue();
        });
    });

    describe('keys method', function () {
        const cookieId = 'test-cookie';
        var date = new Date();
        date.setHours(date.getHours() + 48);

        beforeEach(clearCookies);

        afterEach(clearCookies);

        it('should return the cookie keys found in document.cookie', function () {
            window.CookieHelper.setItem(cookieId, 'test', date, '/');
            expect(window.CookieHelper.keys()).toContain(cookieId);
            expect(window.CookieHelper.keys().length).toEqual(1);
            window.CookieHelper.setItem(
                'oatmeal-chocolate-chip',
                'tasty',
                date,
                '/'
            );
            expect(window.CookieHelper.keys().length).toEqual(2);
        });
    });
});
