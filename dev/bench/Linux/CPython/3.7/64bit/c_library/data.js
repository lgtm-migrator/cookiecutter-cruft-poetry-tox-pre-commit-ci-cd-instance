window.BENCHMARK_DATA = {
  "lastUpdate": 1635517559674,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "d7eeca1d9e67b4f46517bd1680a8ad8a1193af48",
          "message": "Merge pull request #362 from TeoZosa/streamline-and-expand-performance-testing-workflow\n\n👷‍♀️ Streamline and Expand Performance Testing\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@587e34c",
          "timestamp": "2021-10-01T21:00:00Z",
          "tree_id": "ea2e1a176cf76eab14a790bf919b66f4f819c49c"
        },
        "date": 1633123057058,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 288.842968047427,
            "unit": "iter/sec",
            "range": "stddev: 0.0005040435216877879",
            "extra": "mean: 3.462088783950605 msec\nrounds: 324"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 858.6841405828465,
            "unit": "iter/sec",
            "range": "stddev: 0.00018906740463795328",
            "extra": "mean: 1.1645725741728885 msec\nrounds: 937"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1719.4351643525135,
            "unit": "iter/sec",
            "range": "stddev: 0.00009634922550437933",
            "extra": "mean: 581.5863376137065 usec\nrounds: 1869"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "7d9bcdecca698f0b988fa7e33cf25bd2f133f879",
          "message": "Merge pull request #363 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.11.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8bb3f64",
          "timestamp": "2021-10-04T13:20:51Z",
          "tree_id": "c832f23ee0ee4150e089be6ed5cfdd673df85835"
        },
        "date": 1633354944374,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 269.57841486822605,
            "unit": "iter/sec",
            "range": "stddev: 0.00022242096249935168",
            "extra": "mean: 3.709495808441544 msec\nrounds: 308"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 781.8178620443452,
            "unit": "iter/sec",
            "range": "stddev: 0.00014551933689667043",
            "extra": "mean: 1.279070290598297 msec\nrounds: 936"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1583.0693373376641,
            "unit": "iter/sec",
            "range": "stddev: 0.00007690948731909058",
            "extra": "mean: 631.6842708113819 usec\nrounds: 1898"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "8679cb9c951d4061aaf3032e932da1056fc0cea6",
          "message": "Merge pull request #257 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.11.1",
          "timestamp": "2021-10-04T13:25:39Z",
          "tree_id": "c832f23ee0ee4150e089be6ed5cfdd673df85835"
        },
        "date": 1633355650867,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 294.0268330905031,
            "unit": "iter/sec",
            "range": "stddev: 0.0003566402722792269",
            "extra": "mean: 3.40105013372094 msec\nrounds: 344"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 769.6744923855292,
            "unit": "iter/sec",
            "range": "stddev: 0.00040500972157981295",
            "extra": "mean: 1.2992505401869299 msec\nrounds: 1070"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1714.2575653935578,
            "unit": "iter/sec",
            "range": "stddev: 0.00011272851939377408",
            "extra": "mean: 583.3429119330857 usec\nrounds: 2271"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "13a2a5d9efa91bbe55c4495d18a97536657cb76b",
          "message": ":cookie: :art: Remove gratuitous newlines\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4e4a24f",
          "timestamp": "2021-10-12T17:40:15Z",
          "tree_id": "1858ad76937eb7dc75a59c085dd1f547330f2927"
        },
        "date": 1634060811576,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 246.2173335748447,
            "unit": "iter/sec",
            "range": "stddev: 0.0007081456571764779",
            "extra": "mean: 4.06145247972975 msec\nrounds: 296"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 716.0438698133105,
            "unit": "iter/sec",
            "range": "stddev: 0.00046307891994044046",
            "extra": "mean: 1.3965624763476063 msec\nrounds: 909"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1433.8139066280685,
            "unit": "iter/sec",
            "range": "stddev: 0.0003964553068930574",
            "extra": "mean: 697.4405781512622 usec\nrounds: 1785"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "231b24f12a51f2a9aa5ec6dcdc6f94cbe7fa30c0",
          "message": "Merge pull request #387 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.12.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f818a13",
          "timestamp": "2021-10-13T13:33:14Z",
          "tree_id": "c357d6e257253492795e87f59770d70b8c0e54ef"
        },
        "date": 1634132154952,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 284.2615832034172,
            "unit": "iter/sec",
            "range": "stddev: 0.00041988959074521696",
            "extra": "mean: 3.517886549180307 msec\nrounds: 366"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 803.1764221751166,
            "unit": "iter/sec",
            "range": "stddev: 0.00023133317505413022",
            "extra": "mean: 1.2450564687791221 msec\nrounds: 1073"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1661.2334747014806,
            "unit": "iter/sec",
            "range": "stddev: 0.00011676008814129522",
            "extra": "mean: 601.9623461895972 usec\nrounds: 2152"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "172ecf9f0982fff99d9566a5b089450fb6a4f0b4",
          "message": "Merge pull request #388 from TeoZosa/dependabot/pip/emoji-1.6.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@faf7bd6",
          "timestamp": "2021-10-13T13:46:46Z",
          "tree_id": "4b9bdd1bb320ed068209cecfc4bc47b3e6cf0f30"
        },
        "date": 1634133169988,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 282.72010330717967,
            "unit": "iter/sec",
            "range": "stddev: 0.0005198702652274939",
            "extra": "mean: 3.5370671851852173 msec\nrounds: 324"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 829.8242719523605,
            "unit": "iter/sec",
            "range": "stddev: 0.00012468999434638305",
            "extra": "mean: 1.2050744161137399 msec\nrounds: 1055"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1664.2702473112276,
            "unit": "iter/sec",
            "range": "stddev: 0.00026481765683047427",
            "extra": "mean: 600.8639532044668 usec\nrounds: 1966"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "4c17bd668f8c85800b6a7fb7ac0d3b1ce14b0f9d",
          "message": "Merge pull request #386 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-9076976\n\n⬆️ Bump python from `fda1201` to `9076976` in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ad16ed2",
          "timestamp": "2021-10-13T16:37:52Z",
          "tree_id": "2303b4fc619d833b0692599962abe193424fc617"
        },
        "date": 1634143208991,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 349.55657497266617,
            "unit": "iter/sec",
            "range": "stddev: 0.00003122632702022177",
            "extra": "mean: 2.86076724512533 msec\nrounds: 359"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1028.0475149828094,
            "unit": "iter/sec",
            "range": "stddev: 0.000013200163554382181",
            "extra": "mean: 972.7176861243828 usec\nrounds: 1045"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2121.5883508423444,
            "unit": "iter/sec",
            "range": "stddev: 0.00001024604207383376",
            "extra": "mean: 471.3449711405915 usec\nrounds: 2183"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "6b5e9be9586296932350b5ab3ddaed540fda7101",
          "message": "Merge pull request #389 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.12.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@bf1f292",
          "timestamp": "2021-10-14T13:18:32Z",
          "tree_id": "5f2735d3b75dff41c455ef382e74d5ddc96be271"
        },
        "date": 1634217683585,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 303.97214871608344,
            "unit": "iter/sec",
            "range": "stddev: 0.00007327447822733268",
            "extra": "mean: 3.2897750804598274 msec\nrounds: 348"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 891.4187196100529,
            "unit": "iter/sec",
            "range": "stddev: 0.000040681816487124485",
            "extra": "mean: 1.1218072696941406 msec\nrounds: 1079"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1844.4764276945186,
            "unit": "iter/sec",
            "range": "stddev: 0.000021131944249188593",
            "extra": "mean: 542.1592734855052 usec\nrounds: 2278"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "807e4c7d50320904cec1e988f85dcecef67ab1cf",
          "message": "Merge pull request #390 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-2bac437\n\n⬆️ Bump python from `9076976` to `2bac437` in /{{cookiecutter.project_slug}}\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5fbaa81",
          "timestamp": "2021-10-14T16:47:48Z",
          "tree_id": "23c394d030effb731c2816df4cf86c2ae1662abd"
        },
        "date": 1634230167988,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 272.17936824454597,
            "unit": "iter/sec",
            "range": "stddev: 0.00020039599552762",
            "extra": "mean: 3.674047766550499 msec\nrounds: 287"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 795.3437335719373,
            "unit": "iter/sec",
            "range": "stddev: 0.0002686668162308534",
            "extra": "mean: 1.2573180095465628 msec\nrounds: 838"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1579.9180934526557,
            "unit": "iter/sec",
            "range": "stddev: 0.0001157722378357983",
            "extra": "mean: 632.9442039711447 usec\nrounds: 1662"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "68b738cecb460b967f328b3b5849388dfd759f36",
          "message": ":wrench: Add `.python-version` to template `cruft` ignore\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7a514ab",
          "timestamp": "2021-10-14T17:25:13Z",
          "tree_id": "6a99562de7f2ba829a47f505b486d8b733b368ed"
        },
        "date": 1634232582072,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 267.84297571243707,
            "unit": "iter/sec",
            "range": "stddev: 0.000483785981559686",
            "extra": "mean: 3.733530802292255 msec\nrounds: 349"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 818.819948027278,
            "unit": "iter/sec",
            "range": "stddev: 0.00019308484204812068",
            "extra": "mean: 1.2212697094266276 msec\nrounds: 1029"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1684.9143252617675,
            "unit": "iter/sec",
            "range": "stddev: 0.00011495407097236012",
            "extra": "mean: 593.5019870192157 usec\nrounds: 2080"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "31b5c8495ecefe2d2c8a1d212daf12b416acdb84",
          "message": "Merge pull request #391 from TeoZosa/c-compile-all-project-modules-by-default\n\n📦 C-Compile All Project Modules by Default\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e555667",
          "timestamp": "2021-10-14T18:07:44Z",
          "tree_id": "adb0ed2ba63cad7d0fcac014b50ede4f4e853dca"
        },
        "date": 1634234973918,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 277.93298438801315,
            "unit": "iter/sec",
            "range": "stddev: 0.0009034945008305673",
            "extra": "mean: 3.5979896456043976 msec\nrounds: 364"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 803.5261264193275,
            "unit": "iter/sec",
            "range": "stddev: 0.00025866742712999855",
            "extra": "mean: 1.2445146052141445 msec\nrounds: 1074"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1625.7332920148656,
            "unit": "iter/sec",
            "range": "stddev: 0.00022307174263623664",
            "extra": "mean: 615.1070442560981 usec\nrounds: 2124"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "8c22cd32d5a076da41145982ecf610c0eafe39d6",
          "message": "Merge pull request #392 from TeoZosa/migrate-to-github-md-footnote-syntax\n\n📝 Migrate Footnotes to GitHub markdown Syntax\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4cd783c",
          "timestamp": "2021-10-14T18:34:40Z",
          "tree_id": "eb1d6a7e20b302040a2520bbc2eaf342fce97427"
        },
        "date": 1634236601127,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 266.5144429956374,
            "unit": "iter/sec",
            "range": "stddev: 0.00050117813755156",
            "extra": "mean: 3.7521418680351557 msec\nrounds: 341"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 807.5936108706528,
            "unit": "iter/sec",
            "range": "stddev: 0.00015037577556184119",
            "extra": "mean: 1.238246546950659 msec\nrounds: 1033"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1565.3383354768907,
            "unit": "iter/sec",
            "range": "stddev: 0.00010826050956845808",
            "extra": "mean: 638.8395258302694 usec\nrounds: 2168"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "bc242cd6953c31abb58f23e2c989fdf89786d2a0",
          "message": "Merge pull request #394 from TeoZosa/dependabot/github_actions/actions/checkout-2.3.5\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1deca20",
          "timestamp": "2021-10-18T13:15:39Z",
          "tree_id": "edc719a552f7790aedd1bb4a3a23a6e79ca243c9"
        },
        "date": 1634563235250,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 273.0229151260175,
            "unit": "iter/sec",
            "range": "stddev: 0.00038787484546146063",
            "extra": "mean: 3.662696222910213 msec\nrounds: 323"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 775.3871763065852,
            "unit": "iter/sec",
            "range": "stddev: 0.00043923536215643207",
            "extra": "mean: 1.289678280163617 msec\nrounds: 978"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1570.7638721485523,
            "unit": "iter/sec",
            "range": "stddev: 0.00022591846830729247",
            "extra": "mean: 636.6329260120815 usec\nrounds: 2149"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "fef8b02e0e05c58fac183771d639ac1b46802472",
          "message": "Merge pull request #396 from TeoZosa/dependabot/pip/dot-github/workflows/pip-21.3.1\n\n⬆️ Bump pip from 21.3 to 21.3.1 in /.github/workflows\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@9f22059",
          "timestamp": "2021-10-28T23:04:03Z",
          "tree_id": "842771fe62aa28066db05a4aaea0dfe502a5acef"
        },
        "date": 1635462455498,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 239.74203215585234,
            "unit": "iter/sec",
            "range": "stddev: 0.0012493037626148337",
            "extra": "mean: 4.171150094155857 msec\nrounds: 308"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 710.2150328042471,
            "unit": "iter/sec",
            "range": "stddev: 0.0005098756380944915",
            "extra": "mean: 1.4080242656249502 msec\nrounds: 960"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1429.745431324049,
            "unit": "iter/sec",
            "range": "stddev: 0.00040384854687949996",
            "extra": "mean: 699.4252110139123 usec\nrounds: 1943"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "46ff94b8209062042851667b66da6b01714fead0",
          "message": "Merge pull request #399 from TeoZosa/dependabot/pip/darglint-1.8.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7b92610",
          "timestamp": "2021-10-29T13:23:49Z",
          "tree_id": "34121dbcf838b2ec9adb128f6230df40afa1ec49"
        },
        "date": 1635514823662,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 306.215683686944,
            "unit": "iter/sec",
            "range": "stddev: 0.00009561316414037053",
            "extra": "mean: 3.2656720516717175 msec\nrounds: 329"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 901.256615296762,
            "unit": "iter/sec",
            "range": "stddev: 0.00003975927252666287",
            "extra": "mean: 1.1095618972746448 msec\nrounds: 954"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1873.4572233415208,
            "unit": "iter/sec",
            "range": "stddev: 0.00002732587160487306",
            "extra": "mean: 533.7725289592618 usec\nrounds: 2210"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "67698831ba87b6c63f6af37296d0030b36b79187",
          "message": "Merge pull request #400 from TeoZosa/dependabot/pip/types-emoji-1.2.6\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4462229",
          "timestamp": "2021-10-29T13:51:46Z",
          "tree_id": "d2972c49d899bc4ed93738802c03c0f8e53f7cf4"
        },
        "date": 1635516597732,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 327.8737287920164,
            "unit": "iter/sec",
            "range": "stddev: 0.0004364928993246419",
            "extra": "mean: 3.0499546385869194 msec\nrounds: 368"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 971.2941350440923,
            "unit": "iter/sec",
            "range": "stddev: 0.0002477267571208665",
            "extra": "mean: 1.0295542451253497 msec\nrounds: 1077"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1966.985723655843,
            "unit": "iter/sec",
            "range": "stddev: 0.00009308106681094459",
            "extra": "mean: 508.3920986174716 usec\nrounds: 2170"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "494dd5fba45239fb78b2d866814f24d4497f79be",
          "message": "Merge pull request #401 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.15.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a19b9ab",
          "timestamp": "2021-10-29T14:07:45Z",
          "tree_id": "ca8867d47a04ea48ae82fe2446d0edc141dad965"
        },
        "date": 1635517557280,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 278.70952085736207,
            "unit": "iter/sec",
            "range": "stddev: 0.0003852877654461664",
            "extra": "mean: 3.5879649784614998 msec\nrounds: 325"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 791.9356143835739,
            "unit": "iter/sec",
            "range": "stddev: 0.0002631677556510685",
            "extra": "mean: 1.2627289161359148 msec\nrounds: 942"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1475.3535201810755,
            "unit": "iter/sec",
            "range": "stddev: 0.0002105761991993159",
            "extra": "mean: 677.8036493092627 usec\nrounds: 1882"
          }
        ]
      }
    ]
  }
}