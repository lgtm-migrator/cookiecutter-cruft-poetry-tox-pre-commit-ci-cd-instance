window.BENCHMARK_DATA = {
  "lastUpdate": 1625146843707,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
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
          "id": "4e10b96990238f5cc1f5f41f46e0d4036038c8db",
          "message": "Merge pull request #237 from TeoZosa/dependabot/pip/cruft-2.9.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4c87803",
          "timestamp": "2021-07-01T13:34:35Z",
          "tree_id": "d1998ecd30bad9956612602239b85f02263fdfb2"
        },
        "date": 1625146841981,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1054.420126806746,
            "unit": "iter/sec",
            "range": "stddev: 0.0002088156927062688",
            "extra": "mean: 948.3885735645483 usec\nrounds: 469"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1576.9490788011904,
            "unit": "iter/sec",
            "range": "stddev: 0.00009351958724248086",
            "extra": "mean: 634.1358851994182 usec\nrounds: 1385"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8982.21079721843,
            "unit": "iter/sec",
            "range": "stddev: 0.000034924644941395306",
            "extra": "mean: 111.33116585392045 usec\nrounds: 1845"
          }
        ]
      }
    ]
  }
}